# Filter demo

[Demo](https://knoake.github.io/Search-demo/)

## Structure
* An issue page with an issue list and a filter component
  - The filter component outputs an array of filters to be used by an issue service
  -  The list should get the issues from the issue service
* A filter component which creates individual filter inputs as child components
  - Each child component outputs its value on change
  - In turn the filter component then outputs the new filter array
 ### Some changes
 * There should be different filter type components.
   - Currently any new filter type selected creates a new instance of the same component. However, depending on the type of filter, the values and input type vary considerably.
   - Adding new filter types in the future would be easier with different components, e.g. date select component, user select component, search component.
 - Values to select should come from the appropriate services
   * Saved filters for the user has not been implemented
## Behaviour
* Can add many of the same filter type as with Jetbrains. I believe this is incorrect as each filter type is combined with AND and doesn't make sense, for example, assignee = user1 AND assignee = user2 will always return 0
* Each filter type is currently single select, some should be multiple to allow to search for 'any of' the selected values.
* Adding and removing filters is done by adding to, removing, and changing values in an array.
  - I don't like this but didn't have time to improve it
  - I think a map would be better, or on any change in a child, the parent should retrieve the current state from all children.

## State
* Not handled
  - Should be read from the URL on initialisation, populate the appropriate form fields and request issues from service
      
