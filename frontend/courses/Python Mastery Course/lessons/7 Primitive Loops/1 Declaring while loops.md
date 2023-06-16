# --exercise--

# Introduction to While Loops

In Python, a `while` loop is used to repeatedly execute a block of code as long as a certain condition is true. It allows you to create a loop that continues until a specific condition is met.

## Syntax

The syntax for a `while` loop in Python is as follows:

```python
while condition:
    # Code to be executed
```

The condition is a Boolean expression that determines whether the loop should continue or not. 

If the condition is True, the code inside the loop is executed. After each iteration, the condition is checked again. If the condition is still True, the loop continues. 

If the condition becomes False, the loop is exited, and the program continues with the next line of code after the loop.

## Example

```
# Printing numbers from 1 to 5 using a while loop
count = 1
while count <= 5:
    print(count)
    count += 1
```

In this example, the initial value of count is 1. The while loop continues as long as count is less than or equal to 5. 

Inside the loop, the current value of count is printed, and then count is incremented by 1. 

This process repeats until count becomes 6, at which point the condition count <= 5 becomes False, and the loop is exited.

# --hints--

Create a while loop that will continue to loop over numbers while index is smaller or equal to the length of numbers.

```
import re
pattern = r"^while index <= len\(numbers\):"
True if re.findall(pattern, code, re.MULTILINE) else False
```

# --preset--

```
numbers = [5, 1, 6, 9, 3]
number_sum = 0
index = 0

# While loop down here
```