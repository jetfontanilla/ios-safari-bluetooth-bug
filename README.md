# Minimal Reproduction of iOS Bluetooth Bug

to view this in action: [https://jetfontanilla.github.io/ios-safari-bluetooth-bug/](https://jetfontanilla.github.io/ios-safari-bluetooth-bug/) which is a aimple page to test basic Audio Recording using ScriptProcessorNode

## Reproduction Steps:
- connect any bluetooth device (audio and microphone) for your iOS phone
- open Safari on iOS and go to [this page](https://jetfontanilla.github.io/ios-safari-bluetooth-bug/)
- notice that the audio properly outputs on the bluetooth device
- click on **Start Recording** and speak any words or phrases
- click on **Stop Recording**
- download the audio file (PCM/RAW)
- open the file on any audio editor such as Audacity
- file format is: 32-bit float, little-endian, 1 channel (Mono)

### Expected Behavior
- you should be able to see 32 bit float arrays on the console when the ScriptProcessorNode receives audio buffers from the bluetooth device
- looking at the audio, you should be able to see and play back your earlier recording

### Actual Behavior
- no audio is returned from ScriptProcessorNode
- audio file is plain silence

## Notes:
- Device ID and contraints for getUserMedia API is available on the reproduction page
- I've also added some console logging to what audio buffers the ScriptProcessorNode receives


# Development

To build the project, and all the other modules included in the package:

```bash
npm run build
```

To develop and run this code locally:

```bash
npm install && npm run update
npm run dev
```


## License

[MIT](LICENSE)
