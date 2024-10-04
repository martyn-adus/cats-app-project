import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CatService } from '../../services/cat.service';
import { SetBreed } from '../../store/cat.actions';


@Component({
  selector: 'app-cat-search',
  templateUrl: './cat-search.component.html',
  styleUrls: ['./cat-search.component.scss'],
})
export class CatSearchComponent implements OnInit {
  breeds: any[] = [];
  cats: any[] = [];
  searchForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private store: Store, private catService: CatService) {
    this.searchForm = this.fb.group({
      breed: [''],
    });
  }

  ngOnInit() {
    this.catService.getBreeds().subscribe(data => {
      this.breeds = data;
    });
    this.loadCats();
  }

  resetFilter() {
    this.store.dispatch(new SetBreed(''));
    this.loadCats();
  }

  onSearch() {
    const { breed } = this.searchForm.value;
    this.store.dispatch(new SetBreed(breed));
    this.loadCats();
  }

  private loadCats() {
    this.loading = true;

    const breedId = this.store.selectSnapshot((state) => state.cat.breed);
    const limit = 10;

    this.catService.getCats(limit, breedId).subscribe({
      next: (data) => {
        this.cats = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching cats:', err);
        this.errorMessage = 'Failed to load cat images';
        this.loading = false;
      },
    });
  }
}
