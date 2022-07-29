import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem[] = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
    console.log('this.todoList',this.todoList)
  }

 // get les element ta3 list 
 getTodoList(): TodoItem[] {
  return this.todoList;
}
 

//tzid fi koll marra lel list 
addItem(item: TodoItem): void {
    this.todoList.push(item);
    this.saveList();
}

 
// modifier le list 
updateItem(item: TodoItem, changes:any): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...changes};
    this.saveList();
}


// supprimer un element de la list 
  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
}

// bech tsajel fil tableau fi kol marra nest7agouha 
  saveList(): void {
  this.storageService.setData(todoListStorageKey, this.todoList);
}

}
