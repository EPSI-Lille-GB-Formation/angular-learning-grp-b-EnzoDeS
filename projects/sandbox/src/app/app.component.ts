import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { PreventLinkDirective } from './noopen.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HighlightDirective,
    PreventLinkDirective,
  ],
  template: `<h1>Découverte des directives d'attributs</h1>

    <p Highlight bg-color="green" default-color="#03D5AF">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in error
      asperiores vel architecto deleniti, laborum sunt repellat expedita, autem
      vitae totam consectetur. Earum iusto architecto deleniti non quod dicta.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in error
      asperiores vel architecto deleniti, laborum sunt repellat expedita, autem
      vitae totam consectetur. Earum iusto architecto deleniti non quod dicta.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in error
      asperiores vel architecto deleniti, laborum sunt repellat expedita, autem
      vitae totam consectetur. Earum iusto architecto deleniti non quod dicta.
    </p>
    <a href="https://google.com" preventLink target="_blank"
      >aller sur google</a
    >`,

  styles: [],
})
export class AppComponent {}
