---
title: "Using Notion as a Simple Content Management System"
description: "This Little Piggy required a simple yet flexible content management solution on a small scale. Notion ticked all the boxes."
projectShortName: "thislittlepiggyrichmond"
coverImageUrl: "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2021/02/Notion-logo-1.png"
date: "2024-02-14"
tags: ["web development", "backend"]
author:
    name: "Callum Kloos"
    imageUrl: "/avatar.jpeg"
---

When designing the new website for [This Little Piggy Richmond](/projects/this-little-piggy-richmond) , a non-profit organisation dedicated to rehoming guinea pigs, the top priority was a simple and efficient system for adding content to the website. The organisation needed a solution that allowed them to move quickly without being bogged down by complex processes or systems prone to errors and frustration. The website is a crucial part of their work, and the ability to update it promptly was key.

## The Challenge: High Turnover and Cute Content

This Little Piggy Richmond experiences a high turnover of guinea pigs due to the need for pairing, partnering, new arrivals, and high levels of pregnancy. As a result, they required a website that could showcase the cuteness factor of these animals while ensuring that the content remained as up-to-date as possible.

## The Solution: Notion as a Backend

Initially, we considered creating an admin panel tool alongside the public website, allowing the organisation to update the database directly. However, we decided against this approach for several reasons:

1. **Increased Workload**: Building an admin panel would have doubled the amount of work required, and the need for a new website was urgent.
2. **Lack of Flexibility**: An admin panel might have been too inflexible during the early stages, where iterations and changes were likely to occur.

After exploring various options, we had the idea of using Notion as the backend, with all data presented on the front-end being pulled directly from Notion.

## Considerations and Challenges

**Open Schema**: Notion has a very flexible and lax data model, as expected from a product of its kind. To ensure data integrity, we had to implement strict measures to lock down the databases that touched the front-end, preventing schema changes. Additionally, we needed to handle any potential issues gracefully on the front-end to maintain the application's availability.

**Dynamic vs. Static**: As the ability to quickly change content on the front-end was crucial for the client, rendering pages dynamically on each visit was the preferred approach. However, it was essential to consider the issue of 'live' data being pulled from Notion before it was ready for publication.

**Data Ownership**: One potential risk of this solution was the ownership of the data. Since Notion is not designed as a database, there was a possibility that they could revoke API access or change their terms to disallow this use case. To mitigate this risk, we implemented data backups and ensured a clear path for data portability.

## Implementation Details

**Graceful Error Handling and Fallback Data**: To handle cases where the client had incomplete data in the Notion database, we implemented a solution where our components could handle missing data gracefully. This approach provided informative feedback to the client, allowing them to identify and rectify missing data issues without crashing the entire site.

**Data Syncing**: To ensure data integrity and mitigate potential risks, we set up a daily backup process that synchronised data from Notion to a SQLite database. This backup would enable us to migrate to a different solution if necessary.

**Mark as Ready**: To prevent accidental publishing of incomplete or unready data, we implemented a tagging system in Notion. Only data marked as "website-ready" would be pulled and displayed on the front-end.

By leveraging Notion as the backend and implementing these measures, we were able to provide [This Little Piggy Richmond](/projects/this-little-piggy-richmond) with a simple and efficient content management system that met their needs for promptly updating their website with the latest adorable guinea pig content.
