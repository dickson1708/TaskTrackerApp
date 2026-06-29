import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { AccountService } from 'app/core/auth/account.service';
import { TranslateDirective } from 'app/shared/language';

import { TaskService } from 'app/entities/task/service/task.service';
import { ITask } from 'app/entities/task/task.model';

@Component({
  selector: 'jhi-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [TranslateDirective, TranslateModule, RouterLink],
})
export default class Home {
  readonly tasks = signal<ITask[]>([]);

  readonly showAllTasks = signal(false);

  public readonly account = inject(AccountService).account;

  private readonly router = inject(Router);

  private readonly taskService = inject(TaskService);

  constructor() {
    this.loadTasks();
  }

  readonly totalTasks = computed(() => this.tasks().length);

  readonly doneTasks = computed(() => this.tasks().filter(task => task.status === 'DONE').length);

  readonly pendingTasks = computed(() => this.tasks().filter(task => task.status === 'TODO').length);

  readonly progressTasks = computed(() => this.tasks().filter(task => task.status === 'INPROGRESS').length);

  loadTasks(): void {
    this.taskService
      .query({
        page: 0,
        size: this.showAllTasks() ? 1000 : 6,
        sort: ['createdAt,desc'],
      })
      .subscribe(response => {
        this.tasks.set(response.body ?? []);
      });
  }

  toggleTasks(): void {
    this.showAllTasks.update(value => !value);

    this.loadTasks();
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
