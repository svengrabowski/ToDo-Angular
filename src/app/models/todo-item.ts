export class TodoItem {
    public id: number | null = null;
    public description: string = '';
    public title: string = '';
    public done: boolean = false;
    public dueDate?: Date | null = null;
}