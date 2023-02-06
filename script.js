const audioCTX = new AudioContext();
const analyser = new AnalyserNode(audioCTX);
const gainEdit = new GainNode(audioCTX,{
  gain: 0
});
gainEdit.connect(analyser).connect(audioCTX.destination)
const canvas = document.getElementById('canvas1')
const canvasCTX = canvas.getContext('2d');
let audioSource;
analyser.fftSize = 512;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
const barWidth = canvas.width/bufferLength*20;
let barHeight;
let x;
let waveform ="sine";
let gainValue = gainEdit.gain.value;
document.getElementById('waveform-select').addEventListener('change',()=>{
  waveform = document.getElementById('waveform-select').options[document.getElementById('waveform-select').selectedIndex].text;
})
document.getElementById('volume-knob').addEventListener('change',()=>{
  gainEdit.gain.setValueAtTime(gainValue + (document.getElementById('volume-knob').value)/100, audioCTX.currentTime);
})

function visualize(){
  x=0;
  canvasCTX.clearRect(0,0,canvas.width,canvas.height);
  analyser.getByteFrequencyData(dataArray);
  for(let i=0;i<bufferLength; i++){
    barHeight = dataArray[i]/256*canvas.height-10;
    canvasCTX.fillStyle = "red";
    canvasCTX.fillRect(x,0,barWidth,barHeight);
    x+=barWidth;
  }
  requestAnimationFrame(visualize);
}

  document.getElementById('key1').addEventListener('click',()=>{
    
    const osc1 = new OscillatorNode(audioCTX,
      {
        frequency:261.63,
        type: waveform
      });
      osc1.connect(gainEdit);
      osc1.start();
    osc1.stop(audioCTX.currentTime+1)
    visualize();
  })
  document.getElementById('key2').addEventListener('click',()=>{
    const osc2 = new OscillatorNode(audioCTX,
      {
        frequency:277.18,
        type: waveform
      });
      osc2.connect(gainEdit);
    osc2.start();
    osc2.stop(audioCTX.currentTime+1)
    visualize();
  })
  document.getElementById('key3').addEventListener('click',()=>{
    const osc3 = new OscillatorNode(audioCTX,
      {
        frequency:293.66,
        type: waveform
      });
      osc3.connect(gainEdit);
    osc3.start();
    osc3.stop(audioCTX.currentTime+1)
    visualize();
  })
  document.getElementById('key4').addEventListener('click',()=>{
    const osc4 = new OscillatorNode(audioCTX,
      {
        frequency:311.13,
        type: waveform
      });
      osc4.connect(gainEdit);
    osc4.start();
    osc4.stop(audioCTX.currentTime+1)
    visualize();
  })
  document.getElementById('key5').addEventListener('click',()=>{
    const osc5 = new OscillatorNode(audioCTX,
      {
        frequency:329.63,
        type: waveform
      });
      osc5.connect(gainEdit);
    osc5.start();
    osc5.stop(audioCTX.currentTime+1)
    visualize();
  })

  document.getElementById('key6').addEventListener('click',()=>{
    const osc6 = new OscillatorNode(audioCTX,
      {
        frequency:349.23,
        type: waveform
      });
      osc6.connect(gainEdit);
    osc6.start();
    osc6.stop(audioCTX.currentTime+1)
    visualize()
  })
  document.getElementById('key7').addEventListener('click',()=>{
    const osc7 = new OscillatorNode(audioCTX,
      {
        frequency:369.99,
        type: waveform
      });
      osc7.connect(gainEdit);
    osc7.start();
    osc7.stop(audioCTX.currentTime+1)
    visualize();
  })
  document.getElementById('key8').addEventListener('click',()=>{
    const osc8 = new OscillatorNode(audioCTX,
      {
        frequency:392.0,
        type: waveform
      });
      osc8.connect(gainEdit);
    osc8.start();
    
    osc8.stop(audioCTX.currentTime+1)
    visualize();
  })
  document.getElementById('key9').addEventListener('click',()=>{
    const osc9 = new OscillatorNode(audioCTX,
      {
        frequency:415.3,
        type: waveform
      });
      osc9.connect(gainEdit);
    osc9.start();
    osc9.stop(audioCTX.currentTime+1)
    visualize();
  })
  document.getElementById('key10').addEventListener('click',()=>{
    const osc10 = new OscillatorNode(audioCTX,
      {
        frequency:440.0,
        type: waveform
      });
      osc10.connect(gainEdit);
    osc10.start();
    osc10.stop(audioCTX.currentTime+1)
    visualize();
  })
  document.getElementById('key11').addEventListener('click',()=>{
    const osc11 = new OscillatorNode(audioCTX,
      {
        frequency:466.16,
        type: waveform
      });
      osc11.connect(gainEdit);
    osc11.start();
    osc11.stop(audioCTX.currentTime+1)
    visualize();
  })
  document.getElementById('key12').addEventListener('click',()=>{
    const osc12 = new OscillatorNode(audioCTX,
      {
        frequency:493.88,
        type: waveform
      });
      osc12.connect(gainEdit);
    osc12.start();
    osc12.stop(audioCTX.currentTime+1)
  })
  document.getElementById('key13').addEventListener('click',()=>{
    const osc13 = new OscillatorNode(audioCTX,
      {
        frequency:523.25,
        type: waveform
      });
      osc13.connect(gainEdit);
    osc13.start();
    osc13.stop(audioCTX.currentTime+1)
    visualize();
  })

 