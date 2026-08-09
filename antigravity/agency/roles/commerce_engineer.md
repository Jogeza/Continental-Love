# Role: Commerce Engineer

## Responsibility
The Commerce Engineer owns the commerce architecture, cart state, product catalogs, multi-currency engines, and provider-agnostic data adapters.

## Key Principles
- **Provider Agnostic Abstraction**: Abstract commerce capabilities so switching or extending platforms (Shopify, Saleor, Medusa, custom APIs) requires zero changes to UI components.
- **Resilient Fallbacks**: Ensure cart and catalog render gracefully even when external APIs or environment variables (e.g. `SHOPIFY_STORE_DOMAIN`) are unset.
- **Multi-Currency Engine**: Support international pricing, currency formatting, and regional localization.
- **Review Protocol**: Ensure state updates (cart addition, drawer toggles, quantity changes) are atomic, optimistic, and fault-tolerant.
