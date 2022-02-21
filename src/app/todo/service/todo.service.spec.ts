import { createHttpFactory, HttpMethod, SpectatorHttp } from "@ngneat/spectator";
import { environment } from "src/environments/environment";
import { TodoService } from "./todo.service";

describe('todo-service', () => {
  let spectator: SpectatorHttp<TodoService>;
  const createHttp = createHttpFactory(TodoService);

  beforeEach(() => {
    spectator = createHttp();
  });

  it('calls todos endpoint with get method', () => {
    spectator.service.getAllTodoItems().subscribe();
    spectator.expectOne(`${environment.baseUrl}todos`, HttpMethod.GET);
  });

  it('calls todos endpoint with post method', () => {
    spectator.service.saveTodoItem( {id: 1, title: '', description: '', done: false} );
    const req = spectator.expectOne(`${environment.baseUrl}todos`, HttpMethod.POST);
    expect(req.request.body['id']).toEqual(1);
  });
});
