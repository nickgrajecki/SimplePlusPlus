import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    var drinks = [
      { id: 1, name: 'Water', size: "Large" },
      { id: 2, name: 'Orange Juice', size: "Small" },
      { id: 3, name: 'Coffee', size: "Medium" }
    ];
    return {drinks};
  }
}

// This typescript file serves as a mock server.