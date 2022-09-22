import React from 'react';
import { SpinnerComponent } from './spinner.component';
import { screen, render } from '@testing-library/react';
import * as promiseTracker from 'react-promise-tracker/lib/trackerHook';

// Para mockear debe estar fuera de todo y se pueden encadenar
// jest.mock('react-promise-tracker', () => {
//   return {
//     usePromiseTracker: jest
//       .fn()
//       .mockReturnValueOnce({ promiseInProgress: true })
//       .mockReturnValue({ promiseInProgress: true }),
//   };
// });

describe('spinner component spec', () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  it('should not display spinner when component is created and promiseInProgress is false', () => {
    // Arrange
    // create stub
    const promiseTrackerStub = jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: false });

    //Act
    render(<SpinnerComponent />);
    const presentation = screen.queryByRole('presentation');

    // Assert
    expect(promiseTrackerStub).toHaveBeenCalled();
    expect(presentation).not.toBeInTheDocument();
  });

  it('should display spinner when component is created and promiseInProgress is true', () => {
    // Arrange
    // create stub
    const promiseTrackerStub = jest
      .spyOn(promiseTracker, 'usePromiseTracker')
      .mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);
    const presentation = screen.getByRole('presentation');
    screen.debug();

    // Assert
    expect(promiseTrackerStub).toHaveBeenCalled();
    expect(presentation).toBeInTheDocument();
  });
});
