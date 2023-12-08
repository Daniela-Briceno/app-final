// dialog-message.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-message',
  template: `<p>{{ data.mensaje }}</p>`
})
export class DialogMessageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { mensaje: string }) {}
}
