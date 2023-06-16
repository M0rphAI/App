# --exercise--

# Calculate Student Grade

You are tasked with creating a program that calculates a student's letter grade based on their numerical score. The grading scale is as follows:

- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: Below 60

Write a Python program that takes a student's score as a function argument and prints their corresponding letter grade.

# --hints--

If the grade is 90 or bigger, than it should return "A".

```
True if student_letter(90) == "A" else False
```

If the grade is 80 or bigger and smaller than 90, it should return "B"

```
True if student_letter(80) == "B" else False
```

If the grade is 70 or bigger and smaller than 80, it should return "C"

```
True if student_letter(70) == "C" else False
```

If the grade is 60 or bigger and smaller than 70, it should return "D"

```
True if student_letter(60) == "D" else False
```

Any other grade should be an "F"

```
True if student_letter(59) == "F" else False
```

# --preset--

```
def student_letter(percentage):
    # Put the if statements here
```