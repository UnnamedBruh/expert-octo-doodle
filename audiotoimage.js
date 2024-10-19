let exporter
document.getElementById('audioUpload').addEventListener('change', function(event) {
	const file = event.target.files[0]
	if (file) {
		const reader = new FileReader()
		reader.onload = function(e) {
			const audioContext = new (window.AudioContext || window.webkitAudioContext)()
			audioContext.decodeAudioData(e.target.result, (buffer) => {
				const audioData = new Float32Array(buffer.getChannelData(0))
				exporter = new FloatExporter(audioData, buffer.sampleRate)
			});
		};
		reader.readAsArrayBuffer(file);
	}
});
