
## **📚 Learning Path Recommendation:**

**Start with:**
1. Ticket 10 (Simplest - static data)
2. Ticket 5 (Custom Observable - fundamentals) 
3. Ticket 2 (Form valueChanges - very practical)
4. Ticket 1 (HTTP - most common real-world use)

**Then move to:**
5. Ticket 9 (Timers)
6. Ticket 8 (DOM events)
7. Ticket 6 & 7 (Subjects for state management)

**Advanced:**
8. Ticket 3 & 4 (Router)
9. Bonus Ticket (Combining streams)

Each ticket focuses on one specific Observable type with a practical, achievable goal! 🚀

---


## **🎯 Ticket 1: HTTP Client Observable**
**Title:** User Profile Display
  <details>
  
  **Description:**
  Fetch and display user data from a mock API
  
  **Requirements:**
  - Use `http.get()` to fetch user data
  - Display user name, email, and avatar
  - Show loading state while fetching
  - Handle errors gracefully
  
  ```typescript
  // Mock API: https://jsonplaceholder.typicode.com/users/1
  ```
</details>

---

## **🎯 Ticket 2: Form Control valueChanges**
**Title:** Live Character Counter
<details>
  
  **Description:**
  Create a text input that shows character count in real-time
  
  **Requirements:**
  - Textarea for user input
  - Display character count below
  - Show "Too long!" warning when over 100 characters
  - Update count as user types
</details>

---

## **🎯 Ticket 3: Router Events**
**Title:** Navigation Tracker
<details>
  
  **Description:**
  Show a loading spinner during page navigation
  
  **Requirements:**
  - Display "Loading..." during navigation
  - Hide when navigation completes
  - Use `Router.events` and `NavigationStart/End`
</details>

---

## **🎯 Ticket 4: ActivatedRoute Params**
**Title:** Dynamic User Profile Page
<details>
  
  **Description:**
  Display different user profiles based on URL parameter
  
  **Requirements:**
  - Route like `/user/1`, `/user/2`
  - Get user ID from route params
  - Fetch user data based on ID
  - Update when route changes
</details>

---

## **🎯 Ticket 5: Custom Observable**
**Title:** Simple Countdown Timer
<details>
  
  **Description:**
  Create a countdown from 10 to 0
  
  **Requirements:**
  - Start countdown when component loads
  - Display numbers: 10, 9, 8... 0
  - Show "Time's up!" at 0
  - Use `new Observable()`
</details>

---

## **🎯 Ticket 6: Subject**
**Title:** Multi-component Notification System
<details>
  
  **Description:**
  Send messages between two components
  
  **Requirements:**
  - Component A: Input field and "Send" button
  - Component B: Display received messages
  - Use `Subject` to communicate
</details>

---

## **🎯 Ticket 7: BehaviorSubject**
**Title:** User Preference Manager
<details>
  
  **Description:**
  Store and share user theme preference
  
  **Requirements:**
  - Theme toggle (light/dark)
  - Remember last selected theme
  - Multiple components access current theme
  - Use `BehaviorSubject` with initial value
</details>

---

## **🎯 Ticket 8: fromEvent**
**Title:** Double Click Detector
<details>
  
  **Description:**
  Detect when user double-clicks an element
  
  **Requirements:**
  - Button or div element
  - Show "Single click" or "Double click!" message
  - Use `fromEvent` for click events
  - Measure time between clicks
</details>

---

## **🎯 Ticket 9: Timer Observables**
**Title:** Auto-saving Feature
<details>
  
  **Description:**
  Auto-save form data every 30 seconds
  
  **Requirements:**
  - Text input field
  - Show "Last saved: [time]"
  - Auto-save every 30 seconds
  - Use `interval` or `timer`
</details>

---

## **🎯 Ticket 10: Simple Data Observables**
**Title:** Product Catalog
<details>
  
  **Description:**
  Display a list of products from static data
  
  **Requirements:**
  - Hardcoded product array
  - Convert to Observable using `of()` or `from()`
  - Display products in template
  - Add search filter using `filter` operator
</details>

---

## **🎯 Bonus Ticket: Combined Observables**
**Title:** Search + Filter Combo
<details>
  
  **Description:**
  Combine search input with category filter
  
  **Requirements:**
  - Search input field
  - Category dropdown (All, Electronics, Books, etc.)
  - Use `combineLatest` to combine both streams
  - Filter products based on both criteria
</details>

---

## **📊 Progressive Learning Path Summary:**

**Level 1: Fundamentals**
- Ticket 1: Click Counter (fromEvent)
- Ticket 2: Timer (interval)

**Level 2: Basic Streams**  
- Ticket 3: Simple Search (valueChanges)
- Ticket 4: Multiple Sources (forkJoin)

**Level 3: Advanced Beginner**
- Ticket 5: Debounce Search (operators)
- Ticket 6: Simple Dashboard (multiple streams)


## **🌱 Level 1: Beginner Tickets**

### **Ticket 1: Simple Button Click Counter**

**Title:** Create a Click Counter Using Observables
<details>
  
  **Description:**
  Build a component that counts button clicks using Observables instead of regular click events.
  
  **Requirements:**
  - Display current click count
  - Button to increment count
  - Use `fromEvent` to create Observable from button clicks
  - Subscribe to handle clicks
  - Show count in template
  
  **Acceptance Criteria:**
  - [ ] Count starts at 0
  - [ ] Each click increments count by 1
  - [ ] Count displays in template
  - [ ] Uses Observable instead of `(click)`
  
  ```typescript
  // Hint: Start with this structure
  fromEvent(this.button.nativeElement, 'click')
    .subscribe(() => {
      // increment count here
    });
  ```
</details>

---

### **Ticket 2: Simple Timer Display**

**Title:** Display a Timer that Counts Up
<details>
  
  **Description:**
  Create a timer that starts counting seconds when component loads and displays the time.
  
  **Requirements:**
  - Use `interval(1000)` Observable
  - Start timer when component initializes
  - Display seconds in format: "Time: X seconds"
  - Unsubscribe when component destroys
  
  **Acceptance Criteria:**
  - [ ] Timer starts automatically
  - [ ] Updates every second
  - [ ] Shows "Time: 1 seconds", "Time: 2 seconds", etc.
  - [ ] No memory leaks (proper unsubscribe)
  
  ```typescript
  // Hint: Use this pattern
  this.timerSubscription = interval(1000).subscribe(count => {
    this.seconds = count;
  });
  ```
</details>

---

## **🚀 Level 2: Intermediate Tickets** 
*(Complete Level 1 first)*

### **Ticket 3: Basic Search with Simple Filter**

**Title:** Filter a List of Items
<details>
  
  **Description:**
  Create a search input that filters a static list of items as user types.
  
  **Requirements:**
  - Hardcoded array of items (e.g., `['Apple', 'Banana', 'Orange']`)
  - Input field for search
  - Use `FormControl` and `valueChanges`
  - Display filtered results
  
  **Acceptance Criteria:**
  - [ ] Shows all items when no search term
  - [ ] Filters items in real-time as user types
  - [ ] Case-insensitive search
  - [ ] No debounce needed yet
</details>

---


### **Ticket 4: Multiple Data Sources Display**

**Title:** Show Data from Two Different Observables
<details>
  
  **Description:**
  Display user profile and user posts from two different mock Observables.
  
  **Requirements:**
  - Create two mock Observables with `of()` operator
  - Use `forkJoin` to wait for both
  - Display data when both are loaded
  - Show loading state
</details>

---

## **🌱 Level 3: Advanced Beginner Tickets**

### **Ticket 5: Simple Search with Debounce**

**Title:** Add Debounce to Search Input
<details>
  
  **Description:**
  Take the basic search from Ticket 3 and add a simple debounce to prevent too many updates.
  
  **Requirements:**
  - Start with your working search from Ticket 3
  - Add `debounceTime(300)` operator
  - Show "Searching..." text during debounce wait
  - Keep the same item list
  
  **Acceptance Criteria:**
  - [ ] Search still works like before
  - [ ] Waits 300ms after typing stops before filtering
  - [ ] Shows "Searching..." while waiting
  - [ ] Uses `debounceTime` operator
  - [ ] No API calls (still uses local array)
  
  ```typescript
  // Hint: Add to your existing search
  this.searchControl.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(searchTerm => {
      // Your existing filter logic
    });
  ```
</details>

---


### **Ticket 6: Simple Data Dashboard**

**Title:** Display Multiple Data Streams
<details>
  
  **Description:**
  Create a simple dashboard that shows data from two mock Observables with loading states.
  
  **Requirements:**
  - Use `of()` to create mock user data Observable
  - Use `of()` to create mock stats data Observable
  - Use `forkJoin` to wait for both Observables
  - Show loading spinner initially
  - Display both datasets when loaded
  - Add refresh button to reload data
  
  **Acceptance Criteria:**
  - [ ] Shows loading state initially
  - [ ] Displays user data and stats when both loaded
  - [ ] Refresh button reloads both datasets
  - [ ] Uses `forkJoin` to combine Observables
  - [ ] Proper error handling
  
  ```typescript
  // Mock data examples:
  const userData$ = of({ name: 'John', email: 'john@email.com' });
  const statsData$ = of({ visits: 150, sales: 42 });
  
  // Use forkJoin to wait for both
  forkJoin([userData$, statsData$]).subscribe(([user, stats]) => {
    // Handle both datasets here
  });
  ```
</details>

---

