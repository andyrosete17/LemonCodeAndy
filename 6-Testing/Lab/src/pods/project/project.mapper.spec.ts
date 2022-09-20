import * as apiModel from './api/project.api-model';
import { mapProjectFromApiToVm } from './project.mapper';

describe('Project mapper specs', () => {
  it('should return a project when feed with an existing viewModel project', () => {
    // Arrange
    const apiModelEmployee: apiModel.EmployeeSummary = {
      employeeName: 'TestEmployee',
      id: '1',
      isAssigned: false,
    };

    const project: apiModel.Project = {
      employees: [apiModelEmployee],
      id: '1',
      isActive: false,
      name: 'TestProject',
      comments: 'no comments',
      externalId: '123',
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).not.toBeNull();
    expect(result.employees.length).toEqual(1);
    expect(result.employees[0]).toEqual(apiModelEmployee);
  });

  it('should return a new project when feed with an empty project', () => {
    // Arrange
    const project: apiModel.Project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).not.toBeNull();
    expect(result.employees.length).toEqual(0);
  });
});
