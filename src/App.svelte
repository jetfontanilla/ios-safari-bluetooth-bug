<script>
    let isMediaDevicesSupported = navigator.mediaDevices && navigator.mediaDevices.enumerateDevices;

    let fileCounter = 0;
    let selectedDeviceId = "";
    let availableOutputDevices = [];

    let fileExt = "pcm";

    let isRecording = false;
    let currentConstraints = [];
    let chunks = [];
    let stream;

    async function initialize() {
        if (!isMediaDevicesSupported) {
            return;
        }
        await navigator.mediaDevices.getUserMedia({audio: true});
        let devices = await navigator.mediaDevices.enumerateDevices();
        availableOutputDevices = devices.filter(device => device.kind === "audioinput");
        if (!availableOutputDevices || availableOutputDevices.length === 0) {
            isMediaDevicesSupported = false;
            return;
        }

        selectedDeviceId = availableOutputDevices[0].deviceId;

        let supportedContraints = navigator.mediaDevices.getSupportedConstraints() || {};
        const AUDIO_INPUT_CONSTRAINTS = [
            "autoGainControl",
            "echoCancellation",
            "noiseSuppression"
        ];

        currentConstraints = AUDIO_INPUT_CONSTRAINTS.reduce((acc, constraintName) => {
            if (supportedContraints[constraintName]) {
                acc.push({constraintName: constraintName, enabled: true});
            }
            return acc;
        }, []);
    }

    initialize();

    let audioContext;
    let audioSource;
    let audioRecorder;

    async function startRecording() {
        if (!selectedDeviceId) {
            isOutputStreamNotSupported = true;
        }

        chunks = [];
        const constraints = currentConstraints.reduce((acc, constraint) => {
            acc[constraint.constraintName] = constraint.enabled;
            return acc;
        }, {
            audio: {deviceId: {exact: selectedDeviceId}}
        });

        stream = await navigator.mediaDevices.getUserMedia(constraints);
        audioContext = new AudioContext();
        audioSource = audioContext.createMediaStreamSource(stream);
        audioRecorder = audioContext.createScriptProcessor(4096, 1, 1);
        audioRecorder.onaudioprocess = (buffer) => {
            const audioBuffer = new Float32Array(buffer.inputBuffer.getChannelData(0));
            chunks.push(audioBuffer);
        }        
        
        audioSource.connect(audioRecorder);
        audioRecorder.connect(audioContext.destination);


        isRecording = true;
    }

    function stopRecording() {
        if (!stream) {
            return;
        }
        stream.getTracks().forEach(function(track) {
            track.stop();
        });

        let fileBuffer = concatArrayBuffer(chunks);
        console.log(fileBuffer);
        let blob = new Blob(
                            chunks,
                            {type: "audio/pcm"}
                        );
        saveData(blob);

        if (audioRecorder) {
            audioRecorder.disconnect();
        }
        
        if (audioSource) {
            audioSource.disconnect();
        }
        
        if (audioContext) {
            audioContext.close();
        }
        

        isRecording = false;
    }

    function concatArrayBuffer(buffers) {
        let length = 0;
        buffers.forEach(buffer => length += buffer.byteLength);

        let uint8Buffer = new Uint8Array(new ArrayBuffer(length));
        let offset = 0;
        buffers.forEach(dataView => {
            uint8Buffer.set(new Uint8Array(dataView), offset);
            offset += dataView.byteLength;
        });

        return uint8Buffer.buffer;
    }

    function saveData(blob) {
        let fileConstraints = currentConstraints.reduce((acc, constraint) => {
            acc += `${constraint.constraintName}_${constraint.enabled}_`;
            return acc;
        }, "");
        let fileName = `audio_${fileConstraints}${fileCounter}.${fileExt}`;
        let blobUrl = URL.createObjectURL(blob);
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = blobUrl;
        a.download = fileName;
        a.click();
    }

</script>


<div class="container">
    {#if isMediaDevicesSupported}

        <div class="section">
            <label>
                <span class="text-label mr-5">Select Microphone</span>
                <select class="voices" bind:value={selectedDeviceId}>
                    {#each availableOutputDevices as {label, deviceId, kind}}
                        <option value={deviceId}>
                            {label} - {kind} - {deviceId}
                        </option>
                    {/each}
                </select>
            </label>
        </div>

        <div class="section flex-column">
            <div>Enable / Disable Media Constraints</div>
            {#each currentConstraints as constraint}
                <label>
                    <input type=checkbox bind:checked={constraint.enabled} class="mr-5">
                    <span class="text-label">{constraint.constraintName}</span>
                </label>
            {/each}
        </div>

        <div class="section justify-content-center confirm">
            {#if isRecording}
                <button class="primary" on:click={stopRecording}>
                    <span>Stop</span>
                </button>
            {:else}
                <button class="primary" on:click={startRecording}>
                    <span>Record</span>
                </button>
            {/if}
        </div>

    {:else}
        <h2>getUserMedia API is not supported by your browser</h2>
    {/if}
</div>




