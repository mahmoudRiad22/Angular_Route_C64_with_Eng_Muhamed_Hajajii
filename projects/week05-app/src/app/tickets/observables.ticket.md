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

### **Ticket 2: Simple Timer Display**

**Title:** Display a Timer that Counts Up

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

---

## **🚀 Level 2: Intermediate Tickets** 
*(Complete Level 1 first)*

### **Ticket 3: Basic Search with Simple Filter**

**Title:** Filter a List of Items

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

### **Ticket 4: Multiple Data Sources Display**

**Title:** Show Data from Two Different Observables

**Description:**
Display user profile and user posts from two different mock Observables.

**Requirements:**
- Create two mock Observables with `of()` operator
- Use `forkJoin` to wait for both
- Display data when both are loaded
- Show loading state

---

## **🌱 Level 3: Advanced Beginner Tickets**

### **Ticket 5: Simple Search with Debounce**

**Title:** Add Debounce to Search Input

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

### **Ticket 6: Simple Data Dashboard**

**Title:** Display Multiple Data Streams

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

---

