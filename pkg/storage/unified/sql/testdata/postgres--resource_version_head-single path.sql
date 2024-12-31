 SELECT
    MIN("rv") AS rv,
    (EXTRACT(EPOCH FROM statement_timestamp()) * 1000000)::BIGINT AS current_epoch
    FROM (
        SELECT MAX("resource_version") AS rv
        FROM "resource_history"
        WHERE "group"     = 'group'
        AND "resource"  = 'resource'
        UNION ALL
        SELECT MIN("resource_version") AS rv
        FROM "resource_lock"
        WHERE "group"     = 'group'
        AND "resource"  = 'resource'
        UNION ALL
        SELECT (EXTRACT(EPOCH FROM statement_timestamp()) * 1000000)::BIGINT AS rv
    ) AS t
    WHERE rv IS NOT NULL
;
