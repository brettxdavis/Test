const jsPsych = initJsPsych({
  on_finish: function () {
    jsPsych.data.displayData(); // shows data at end for now
  }
});

const timeline = [];

// Trial 1: Button welcome
timeline.push({
  type: 'html-button-response',
  stimulus: '<p>Welcome to the demo study!</p><p>Click when ready.</p>',
  choices: ['Continue']
});

// Trial 2: Webcam display (live, no recording)
timeline.push({
  type: 'mirror-camera',
  width: 640,
  height: 480,
  prompt: '<p>Look into the webcam and speak naturally for 30 seconds.</p>',
  trial_duration: 30000
});

// Trial 3: Reflection question
timeline.push({
  type: 'survey-text',
  questions: [{ prompt: 'How did that feel?' }]
});

// Start the study
jsPsych.run(timeline);
