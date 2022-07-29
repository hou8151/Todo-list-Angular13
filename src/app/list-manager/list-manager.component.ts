import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from '../services/storage.service';
import { TodoListService } from '../services/todo-list.service';


@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];
  
  // injection de service dans le constructeur 
  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  // remplir le list depuis le service fonction getToDoList()
    this.todoList = this.todoListService.getTodoList();
    console.log('this.todoList',typeof this.todoList)
  }

  // fonction pour ajouter un element dans la liste par le service 
  addItem(title: string): void {
    this.todoListService.addItem({title});
    // this.storageService.setData()
  }

  // fonction pour supprimer un element dans la liste par le service 
  removeItem(item:any): void {
  this.todoListService.deleteItem(item);
}
  updateItem(item:any, changes:any): void {
  this.todoListService.updateItem(item, changes);
}

}