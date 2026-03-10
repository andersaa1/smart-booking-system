# Smart Booking System

## Architecture Overview

The application consists of two separate modules:

- backend - Spring Boot 
- frontend - React + TypeScript

## Floor Plan
The layout of the restaurant might change in the future. The mock-restaurant floor plan consists of eight different zones, five of which include tables that can be reserved. These zones are:
* **Main Room:** Loudest and busiest section in the restaurant, which offers seats for 4 - 6 customers. Meant for families and get-togethers.
* **Quiet Room:** The most mellow and quiet section in the restaurant that includes a separate bar and offers seats for 2 - 4 customers. Meant for dates and magical nights.
* **Terrace:** Outdoor section of the restaurant, which offers seats for up to 2 customers. Meant for warm summer days and clear stary nights.
* **Show Room:** Section of the restaurant which includes a stage for performers and special events and offers seats for up to 2 customers. This section might not be available at all times.
* **Special Rooms:** Two secluded rooms in the restaurant, where the larger room offer seats for up to 12 customers and the smaller room offers seats for up to 8 customers. Meant for private birthdays and other celebrations.
* **Additional Rooms:** Extra rooms where table reservations are not available and are meant to boost the customer experience. These rooms are two bathrooms, a stage and a bar.
</br>

<img src="docs/floor-plan.png" alt="Restaurant floor plan" width=500px>

## Code Quality

The project enforces consistent code quality rules in both the backend files and frontend files.

### Frontend
Frontend code quality is handled with:
- **ESLint** for linting
- **Prettier** for formatting

Linting rules are defined in [eslint.config.js](/frontend/eslint.config.js). </br>
Formatting rules are defined in [.prettierrc](/frontend/.prettierrc). </br>
</br>
Linting and formatting are applied to only `.ts` and `.tsx` files.

### Backend
Backend code quality is handled with:
- **Checkstyle** for linting
- **Spotless** with **google-java-format** for formatting

Linting rules are defined in [checkstyle.xml](/backend/config/checkstyle.xml).

### Local Commands
Frontend:
```bash
cd frontend
npm run lint:check
npm run lint
npm run format:check
npm run format
```
Backend:
```bash
cd backend
./mvnw checkstyle:check
./mvnw spotless:check
./mvnw spotless:apply
```

## CI/CD Pipeline
GitHub Actions is used to run code quality checks on every push and pull request to the `main` branch.
</br>
The pipeline contains four jobs:
* frontend lint
* backend lint
* frontend format
* backend format

### Lint and Format Jobs
The pipeline only validates the code, by executing `...:check` commands. Formatting fixes must be applied locally before pushing changes.
