'use client'
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toogleTodo: (id: string, complete: boolean) => void
};

export function TodoItem({ id, title, complete, toogleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toogleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
