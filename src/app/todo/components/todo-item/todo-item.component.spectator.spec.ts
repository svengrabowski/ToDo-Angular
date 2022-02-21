import { createComponentFactory, Spectator, MockProvider } from '@ngneat/spectator';
import { CutPipe } from '../../pipes/cut.pipe';
import { TodoItemComponent } from './todo-item.component';

const todoItem = {
  id: 1,
  title: 'Test',
  description: '',
  done: false,
};

describe('todo-item with spectator', () => {
  let spectator: Spectator<TodoItemComponent>;

  const createComponent = createComponentFactory({
    component: TodoItemComponent,
    shallow: true,
    declarations: [
      CutPipe,
    ]
  });

  beforeEach(() => {
    spectator = createComponent({ props: { todo: todoItem } })
  });

  it('renders todo title', () => {
    expect(spectator.query('h5')).toHaveText(`0 - ${todoItem.title}`.toLocaleUpperCase());
  });

});
