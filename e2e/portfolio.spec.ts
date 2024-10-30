import { test, expect } from "@playwright/test";

test("Has title", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	await expect(page).toHaveTitle("Callum Kloos | Developer and Designer");
});

test("Simple navigation", async ({ page }) => {
	await page.goto("http://localhost:5173/");
	await expect(page.getByRole("heading", { name: "Callum Kloos" })).toBeVisible();
	await expect(
		page.getByText(
			"Game Master Tabletop RPG Note TakingWrite notes in markdown and connect related",
		),
	).toBeVisible();
	await expect(page.getByRole("main")).toContainText(
		"Write notes in markdown and connect related entities to always find the note that you need.",
	);
	await expect(page.getByRole("main")).toContainText(
		"Create and share playlists to keep track of what you have been playing",
	);
	await page.getByRole("link", { name: "projects" }).click();
	await expect(page.getByRole("main")).toContainText("Projects");
	await expect(
		page.getByText(
			"Game Master Tabletop RPG Note TakingWrite notes in markdown and connect related",
		),
	).toBeVisible();
	await page
		.getByText(
			"playQ Videogame Playlist ManagerCreate and share playlists to keep track of",
		)
		.click();
	await expect(page.getByLabel("Application screenshot").first()).toBeVisible();
	await page.getByRole("button", { name: "Next slide" }).click();
	await expect(page.getByLabel("Application screenshot").nth(1)).toBeVisible();
	await page.getByRole("button", { name: "Next slide" }).click();
	await expect(page.getByRole("link", { name: "https://playq.xyz" })).toBeVisible();
	await expect(page.getByRole("main")).toContainText("Other Projects");
	await expect(
		page.getByRole("link", { name: "Game Master Tabletop RPG Note" }),
	).toBeVisible();
	await expect(
		page.getByRole("link", { name: "My Developer Portfolio" }),
	).toBeVisible();
});
