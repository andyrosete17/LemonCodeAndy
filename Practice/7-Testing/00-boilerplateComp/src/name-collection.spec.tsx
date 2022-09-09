import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { NameCollection } from './name-collection';
import * as api from './name-api';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UserEdit } from './user-edit';

const renderWithRouter = (component) =>
  render(
    <HashRouter>
      <Routes>
        <Route path="/" element={component} />
        <Route path="users/:name" element={<UserEdit />} />
      </Routes>
    </HashRouter>
  );

describe('NameCollection component specs', () => {
  it(`should display a list with one item when it mounts the component and it
      resolves the async call`, async () => {
    // Arrange
    const names = ['John Doe'];
    const stub = jest.spyOn(api, 'getNameCollection').mockResolvedValue(names);

    // Act
    renderWithRouter(<NameCollection />);
    const itemsBeforeWait = screen.queryAllByRole('listitem');
    const items = await screen.findAllByRole('listitem');

    // Assert
    expect(items).toHaveLength(1);
    expect(stub).toHaveBeenCalled();
    expect(itemsBeforeWait).toHaveLength(0);
  });

  it('should remove initial list when it mounts the component and it resolves the async call', () => {
    // Arrange
    const initialNameCollection = ['initial-user'];
    const names = ['John Doe'];
    const stub = jest.spyOn(api, 'getNameCollection').mockResolvedValue(names);

    // Act
    renderWithRouter(
      <NameCollection initialNameCollection={initialNameCollection} />
    );

    // Assert
    const initialItems = screen.getAllByRole('listitem');
    expect(initialItems).toHaveLength(1);
    expect(initialItems[0].textContent).toEqual('initial-user');
  });

  it('should remove initial list when it mounts the component and it resolves the async call', async () => {
    // Arrange
    const initialNameCollection = ['initial-user'];
    const names = ['John Doe'];
    const stub = jest.spyOn(api, 'getNameCollection').mockResolvedValue(names);

    // Act
    renderWithRouter(
      <NameCollection initialNameCollection={initialNameCollection} />
    );

    // Assert
    const initialItems = screen.getAllByRole('listitem');
    expect(initialItems).toHaveLength(1);
    expect(initialItems[0].textContent).toEqual('initial-user');

    await waitFor(
      () => {
        expect(screen.queryByText('initial-user')).not.toBeInTheDocument();
      },
      { timeout: 10 }
    );
  });
});
