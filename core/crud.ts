import fs from 'node:fs'
import { v4 as uuid } from 'uuid'

const DB_FILE_PATH = './core/db'

type UUID = string

interface Todo {
  id: UUID
  date: string
  content: string
  done: boolean
}

function create(content: string): Todo {
  const todo: Todo = {
    id: uuid(),
    date: new Date().toISOString(),
    content: content,
    done: false,
  }

  const todos: Array<Todo> = [...read(), todo]

  // salvar o content no sistema
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ todos }, null, 2))

  return todo
}

export function read(): Array<Todo> {
  const dbString = fs.readFileSync(DB_FILE_PATH, 'utf-8')
  const db = JSON.parse(dbString || '{}')
  if (!db.todos) {
    // Fail Fast Validations
    return []
  }

  return db.todos
}

function update(id: UUID, partialTodo: Partial<Todo>): Todo {
  let updatedTodo
  const todos = read()

  todos.forEach((currentTodo) => {
    const isUpdate = currentTodo.id === id

    if (isUpdate) {
      updatedTodo = Object.assign(currentTodo, partialTodo)
    }
  })

  if (!updatedTodo) {
    throw new Error('Please, provide another ID!')
  }

  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ todos }, null, 2))

  return updatedTodo
}

function updateContentById(id: UUID, content: string) {
  return update(id, { content })
}

function deleteById(id: UUID) {
  const todos = read()

  const todosWithoutOne = todos.filter((todo) => {
    if (id === todo.id) {
      return false
    }
    return true
  })

  fs.writeFileSync(
    DB_FILE_PATH,
    JSON.stringify({ todos: todosWithoutOne }, null, 2),
  )
}

function CLEAR_DB() {
  fs.writeFileSync(DB_FILE_PATH, '')
}

// [SIMULATION]
// CLEAR_DB()

// create('Primeira TODO')

// const secondTodo = create('Segunda TODO')
// deleteById(secondTodo.id)

// const thirdTodo = create('Terceira TODO')
// updateContentById(thirdTodo.id, 'Atualizada!')

// const todos = read()
// console.log(todos)
// console.log(todos.length)