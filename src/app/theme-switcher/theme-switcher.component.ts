import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setThemeIcon()
  }

  toggleTheme() {
    const currentTheme = localStorage.getItem('color-theme')
    if (currentTheme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
    this.setThemeIcon()
  }

  setThemeIcon() {
    const themeToggleDarkIcon = document.getElementById(
      'theme-toggle-dark-icon'
    )
    const themeToggleLightIcon = document.getElementById(
      'theme-toggle-light-icon'
    )

    if (localStorage.getItem('color-theme') === 'dark') {
      themeToggleLightIcon?.classList.remove('hidden')
      themeToggleDarkIcon?.classList.add('hidden')
    } else {
      themeToggleLightIcon?.classList.add('hidden')
      themeToggleDarkIcon?.classList.remove('hidden')
    }
  }
}
