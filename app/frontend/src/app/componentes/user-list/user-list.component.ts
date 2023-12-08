import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any[] = [];
  filteredUserList: any[] = [];
  pageSize = 5;
  currentPage = 1;

  constructor(private http: HttpClient, private config: NgbPaginationConfig) {
    config.size = 'sm';
    config.boundaryLinks = true;
  }

  ngOnInit(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/api/users/').subscribe(
      (data) => {
        this.userList = data;
        this.filteredUserList = [...this.userList];
      },
      (error) => {
        console.error('Error fetching user list:', error);
      }
    );
  }

  onFilterChange(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
  
    // Aplicar filtrado
    this.filteredUserList = this.userList.filter((user) => {
      return (
        user.email.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.first_name.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.last_name.toLowerCase().includes(filterValue.toLowerCase())
      );
    });
  
    // Restablecer la página actual al filtrar
    this.currentPage = 1;
  }
  
}