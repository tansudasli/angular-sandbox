# core-forms-reactive

1. add _html components_ in html and **bind**!
```
form [formGroup]="xyzForm" (ngSubmit)="onSubmit()"
  div
    label for=fieldName fieldText
    text id=fieldName formControlName="fieldName"
    button type=submit btnText
```
2. add `ReactiveFormsModule` in app.module.ts
3. define variables
```
xyzForm: FormGroup
```
4. inside `ngOnInit()`, create html components in ts w/ validators
and define _levels_!
```
this.xyzForm = new FormGroup({
  'fieldName': new FormControl(null, Validators.required),
  'fieldName': new FormControl(null, [Validators.required, Validators.email])
})
```

2 types of validators available

    - built-in or custom
    - sync or async

5. inside ts, add other functions
```
onSubmit() {
    console.log(this.xyzForm.value);
}

```

