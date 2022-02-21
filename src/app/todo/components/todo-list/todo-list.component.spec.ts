import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { MockComponents, MockProvider } from 'ng-mocks'
import { of } from "rxjs";
import { TodoService } from "../../service/todo.service";
import { TodoCreateReactiveComponent } from "../todo-create-reactive/todo-create-reactive.component";
import { TodoCreateComponent } from "../todo-create/todo-create.component";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodoListComponent } from "./todo-list.component";

const todos = [
  {
    id: 1,
    title: 'Test',
    description: '',
    done: false,
  },
  {
    id: 2,
    title: 'Test 2',
    description: '',
    done: false,
  },
]

describe('todo-list', () => {
  let spectator: Spectator<TodoListComponent>;

  const createComponent = createComponentFactory({
    component: TodoListComponent,
    shallow: true,
    declarations: [
      MockComponents(TodoCreateComponent, TodoCreateReactiveComponent, TodoItemComponent)
    ],
    providers: [
      MockProvider(TodoService, {
        getAllTodoItems: () => of(todos)
      })
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should have 2 items', () => {
    expect(spectator.component.todoList.length).toBe(2);
  });

  it('should have a todoitem component', () => {
    const todoItemComponent = spectator.query(TodoItemComponent);
    expect(todoItemComponent).toBeDefined();
  });

  it('should have a todocreate component', () => {
    const todoCreateComponent = spectator.query(TodoCreateComponent);
    expect(todoCreateComponent).toBeDefined();
  });

  it('should have a todocreatereactive component', () => {
    const todoCreateReactiveComponent = spectator.query(TodoCreateReactiveComponent);
    expect(todoCreateReactiveComponent).toBeDefined();
  });
});
