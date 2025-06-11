# **Conditional Statements in JavaScript**  

## **Overview**  
Conditional statements allow us to execute specific blocks of code **only when certain conditions are met**. This helps in **decision-making** in programs.  

---

## **Key Concepts**  

### **1. `if` Statement**  
Executes a block of code **if a condition is true**.  
```javascript
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

### **2. `if...else` Statement**  
Handles **two** possible conditions.  
```javascript
let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunshine!");
}
```

### **3. `else if` Statement**  
Checks **multiple conditions** sequentially.  
```javascript
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
```

### **4. Comparison Operators**  
Used for condition checking:  
- `>` (greater than)  
- `<` (less than)  
- `>=` (greater than or equal to)  
- `<=` (less than or equal to)  
- `===` (strict equality)  
- `!==` (strict inequality)  

---

## **Logical Operators**  

### **5. AND (`&&`) Operator**  
Returns `true` only if **both conditions** are true.  
```javascript
let hasID = true;
let age = 20;
if (hasID && age >= 18) {
  console.log("You can enter the club.");
}
```

### **6. OR (`||`) Operator**  
Returns `true` if **at least one condition** is true.  
```javascript
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
  console.log("You can relax today.");
}
```

### **7. NOT (`!`) Operator**  
**Negates** a boolean value.  
```javascript
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in.");
}
```

---

## **Shortcuts**  

### **8. Ternary Operator (`? :`)**  
Shorthand for `if...else`.  
```javascript
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Output: Adult
```

### **9. `switch` Statement**  
Used when comparing a single value against multiple cases.  
```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Regular day.");
}
```

---

## **Summary**  
✔ `if`, `if...else`, `else if` for condition checks  
✔ `&&`, `||`, `!` for logical operations  
✔ `? :` (ternary) for concise conditions  
✔ `switch` for multiple case checks  

Mastering conditionals will make your code **more dynamic and interactive!** 🚀