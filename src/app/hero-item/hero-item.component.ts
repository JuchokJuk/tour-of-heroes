import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Input } from '@angular/core';
@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input()
  hero!: Hero;
  ngOnInit(): void {

  }
}

