const jsPsych = initJsPsych({
  on_finish: function () {
    jsPsych.data.displayData();  // Show collected data for now
  }
});

const timeline = [];

// Welcome trial
timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p>Welcome to the study!</p><p>Click below to begin.</p>',
  choices: ['Start']
});

// Webcam display trial (live feed only)
timeline.push({
  type: jsPsychMirrorCamera,
  width: 640,
  height: 480,
  prompt: '<p>Look into the camera and speak naturally for 30 seconds.</p>',
  trial_duration: 30000, // 30 seconds
  show_recording_button: false // Just a live mirror, no recording
});

// Reflection survey
timeline.push({
  type: jsPsychSurveyText,
  questions: [
    { prompt: "How did that feel?", name: 'reflection', rows: 4, columns: 50 }
  ],
  button_label: "Submit"
});

// Run it!
jsPsych.run(timeline);
