# Requirements for BMI Calculator

## Function Tasks

Calculate Body Mass Index (BMI) using weight (lbs) and height (feet, inches).

## Inputs
- `w_lbs` (number): weight in pounds
- `h_foot` (number): height (feet)
- `h_inches` (number): remaining height (inches)

## Validation
- If any input is not a number → return `-1`
- If computed weight or height is less than or equal to 0 → return `-2`

## Assumptions
- Valid human inputs are expected (positive weight and height)
- Inputs like `0, 0, 0` are considered invalid in practice, even if technically allowed

## Calculation
- Convert weight to kilograms:
  - `kg = w_lbs / 2.205`
- Convert height to meters:
  - `meters = ((h_foot * 12 + h_inches) * 2.54) / 100`
- Compute BMI:
  - `BMI = kg / (meters^2)`

## Output
- Return BMI rounded to 2 decimal places
- Return `-1` for invalid input types
- Return `-2` for non-positive values