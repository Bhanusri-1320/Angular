import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bindCallback } from 'rxjs';
import { ColorBoxComponent } from "../color-box/color-box.component";

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [FormsModule, ColorBoxComponent],
  templateUrl: './color-game.component.html',
  styleUrl: './color-game.component.scss'
})
export class ColorGameComponent {
  color=''
  colorList=['crimson','purple','pink']
  addColor()
  {
    this.colorList.push(this.color)
  }
}
