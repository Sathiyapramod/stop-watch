Task:

Create a stopwatch application in React that displays hours, minutes, and seconds. The stopwatch should have the following features:

Start button: When Task:
Create a stopwatch application in React that displays hours, minutes, and seconds. The stopwatch should have the following features:

Start button: When clicked, the stopwatch starts counting from 00:00:00.
Stop button: When clicked, the stopwatch stops counting.
Reset button: When clicked, the stopwatch resets to 00:00:00.
Requirements:

The stopwatch should display hours, minutes, and seconds in the format HH:MM:SS.
The stopwatch should update in real-time.
The stopwatch should be able to handle multiple start and stop events.
The stopwatch should be able to reset to 00:00:00.
Evaluation Criteria:

Correctness: Does the stopwatch work as expected?
Code Quality: Is the code well-organized, readable, and maintainable?
Performance: Does the stopwatch update in real-time without any noticeable delays?
Example Use Case:

The user clicks the start button, and the stopwatch starts counting from 00:00:00.
The user clicks the stop button, and the stopwatch stops counting at 00:01:30.
The user clicks the reset button, and the stopwatch resets to 00:00:00.
Code Structure:

Create a new React component for the stopwatch.
Use the useState hook to store the hours, minutes, and seconds.
Use the useRef hook to store the interval ID.
Create functions for starting, stopping, and resetting the stopwatch.
Use the setInterval function to update the stopwatch every second.
