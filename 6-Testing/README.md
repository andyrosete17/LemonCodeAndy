# Testing lab

- For this lab we will be performing unit tests and also some e2e test.
- Create a CI pipeline to execute unit test and e2e test when open a pr against master

# Mandatory part
## Unit test added
- Mapper => ```./src/pods/project/project.mapper.ts```
- Component => ```./src/common/components/confirmation-dialog/confirmation-dialog.component.tsx```
- Hook => ```./src/common/components/confirmation-dialog/confirmation-dialog.hook.ts```

## The mandatory code was done in the branch [feature/laboratorio-testing-obligatorio](https://github.com/andyrosete17/LemonCodeAndy/tree/feature/laboratorio-testing-obligatorio)
<br>

# Optional part
## Unit test added 
- Component => ```./src/common/components/spinner/spinner.component.tsx```
- Add CI(Continuous integration) pipeline with Github Actions

## End to End test
- Add Cypres e2e test to one of the scene
- Add CI pipeline with github actions for the e2e test.

## The optional code was done in the branch [feature/laboratorio-testing-opciona](https://github.com/andyrosete17/LemonCodeAndy/tree/feature/laboratorio-testing-opcional)
<br>

# How to run the code
- Execute ```npm run test``` for the unit test (in the branch [feature/laboratorio-testing-obligatorio](https://github.com/andyrosete17/LemonCodeAndy/tree/feature/laboratorio-testing-obligatorio)) 
- Execute ```npm run start:e2e``` for the e2e test (in the branch  [feature/laboratorio-testing-opciona](https://github.com/andyrosete17/LemonCodeAndy/tree/feature/laboratorio-testing-opcional))