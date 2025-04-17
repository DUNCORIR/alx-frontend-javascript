import ClassRoom from './0-classroom.js';

/**
 * Creates an array of ClassRoom objects with predefined sizes.
 * @returns {ClassRoom[]} Array of ClassRoom instances
 */
function initializeRooms() {
  // Create ClassRoom objects with sizes 19, 20, and 34
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  // Return them in an array in the specified order
  return [room1, room2, room3];
}

// Export the function for use in other modules or tests
export default initializeRooms;
