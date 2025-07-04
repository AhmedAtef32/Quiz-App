import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonQuizComponent } from './skeleton-quiz.component';

describe('SkeletonQuizComponent', () => {
  let component: SkeletonQuizComponent;
  let fixture: ComponentFixture<SkeletonQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
