import { TestBed, async, inject } from '@angular/core/testing';

import { EditarGuard } from './editar.guard';

describe('EditarGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditarGuard]
    });
  });

  it('should ...', inject([EditarGuard], (guard: EditarGuard) => {
    expect(guard).toBeTruthy();
  }));
});
