import { TodoItem } from '@/components/TodoItem';
import { prisma } from '@/db';
import Link from 'next/link';

function getTodos() {
  return prisma.todo.findMany();
}

async function toogleTodo(id: string, complete: boolean){
  "use server"
  await prisma.todo.update({where: {id}, data: {complete}})
  // console.log(id, complete);
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded outline-none hover:bg-slate-600 focus-within:bg-slate-600"
        >
          New Todo
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toogleTodo={toogleTodo} />
        ))}
      </ul>
    </>
  );
}
