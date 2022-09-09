import { mapMemberListFromApiToVM } from './mapper';
import * as apiModel from './api-model';
import * as viewModel from './view-model';

describe('mapper specs', () => {
  it.each<apiModel.Member[]>([undefined, null, []])('should return empty array when it feeds %p', (members: any) => {
    // Arrange

    // Act
    const result: viewModel.Member[] = mapMemberListFromApiToVM(members);

    // Assert
    expect(result).toEqual([]);
  });

  // it('should return empty array when it feeds null ', () => {
  //   // Arrange
  //   const members: apiModel.Member[] = null;

  //   // Act
  //   const result: viewModel.Member[] = mapMemberListFromApiToVM(members);

  //   // Assert
  //   expect(result).toEqual([]);
  // });

  // it('should return empty array when it feeds []', () => {
  //   // Arrange
  //   const members: apiModel.Member[] = undefined;

  //   // Act
  //   const result: viewModel.Member[] = mapMemberListFromApiToVM(members);

  //   // Assert
  //   expect(result).toEqual([]);
  // });

  it('should return empty array when it feeds array with one item', () => {
    // Arrange
    const members: apiModel.Member[] = [
      {
        id: 1,
        login: 'test',
        avatar_url: 'avatar',
      },
    ];

    // Act
    const result: viewModel.Member[] = mapMemberListFromApiToVM(members);

    // Assert
    const expectedResult: viewModel.Member[] = [
      {
        id: '1',
        login: 'test',
        avatarUrl: 'avatar',
      },
    ];
    expect(result).toEqual(expectedResult);
  });
});
