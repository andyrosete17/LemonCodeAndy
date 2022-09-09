import { Member } from './api-model';
import { getMembers } from './api';
import Axios from 'axios';

describe('api specs', () => {
  it('should return members when it resolve request successfully', async () => {
    // Arrange
    const members: Member[] = [
      {
        id: 1,
        login: 'test',
        avatar_url: 'avatar',
      },
    ];

    // const stub = jest
    //   .spyOn(Axios, 'get')
    //   .mockImplementation(() => Promise.resolve(members));

    const stub = jest.spyOn(Axios, 'get').mockResolvedValue({
      data: members,
    });

    // Act
    const result = await getMembers();

    // Assert
    expect(stub).toHaveBeenCalledWith(
      'https://api.github.com/orgs/lemoncode/members'
    );
    expect(result).toEqual(members);
  });

  it('should throw an error with "Too much Github API calls!" when it rejects the request with 403 status code', async () => {
    // const stub = jest
    //   .spyOn(Axios, 'get')
    //   .mockImplementation(() => Promise.resolve(members));

    const stub = jest.spyOn(Axios, 'get').mockRejectedValue({
      response: {
        status: 403,
      },
    });

    // Act
    try {
      const result = await getMembers();
    } catch (error) {
      // Assert
      expect(error).toEqual('Too much github api calls!');
    }
  });
});
