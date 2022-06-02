import { container } from './container';
import { UserPage } from './UserPage';

const userPage = container.get(UserPage);

userPage.render();
