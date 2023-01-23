import { InMemoryDbService } from "angular-in-memory-web-api";
import { IEvent } from "./calendar/models/event.interface";

export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const events = [
          {
            id: 1,
            title: 'Duncan In Memory',
            startDate: '',
            endDate:''
          }
        ] as IEvent[];
        return { events};
      }
}