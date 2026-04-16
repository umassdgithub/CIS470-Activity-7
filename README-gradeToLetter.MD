# Requirements for gradeToLetter

## Function Tasks
This function is intended to convert a numeric score into a letter grade.

## Inputs
- `score` (number) — required
- `options` (object, optional):
  - `usePlusMinus` (boolean)
  - `round` (boolean)

## Validation
- If `score` is not a number or is `NaN` → return:
  `"Invalid input. Please provide a valid number."`
- If `score < 0` or `score > 100` → return:
  `"Score must be between 0 and 100."`

## Grading Rules
- 90–100 → A  
- 80–89 → B  
- 70–79 → C  
- 60–69 → D  
- < 60 → F  

## Options Behavior
- If `round = true` → round score before grading
- If `usePlusMinus = true`:
  - Ones digit 7–9 → "+"
  - Ones digit 0–2 → "-"
  - No "A-" and no +/- for "F"

## Output
- Return a string grade (e.g., `"A"`, `"B+"`)
- Or an error message if invalid input