//import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core'

import { Task } from '../../models/task';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
    selector: 'app-task-add',
    templateUrl: './taskadd.component.html',
    styleUrls: ['./taskadd.component.css']
})


export class TaskAddComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    constructor() { }

    addTask() {

    }
}