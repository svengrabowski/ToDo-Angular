import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CutPipe } from "../../pipes/cut.pipe";
import { TodoItemComponent } from "./todo-item.component"

const todoItem = {
  id: 1,
  title: 'Test',
  description: '',
  done: false,
};

describe('todo-item', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent, CutPipe],
      schemas: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    component.todo = todoItem;

    fixture.detectChanges();
  });

  it('renders todo title', () => {
    const title = fixture.debugElement.query(By.css('h5'));
    expect(title.nativeElement.textContent).toEqual(`0 - ${todoItem.title}`.toLocaleUpperCase())
  });
});
