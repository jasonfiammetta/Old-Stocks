## Things to keep from this repo
Server - always on, always responsive to incoming requests, able to track stock data at will and store it, able to stream data


## Capabilities to encapsulate in a single space
Interacting with TDA
 - Keeping login refresh token up to date
HTTP Client
 - Maintaining rate limit and traffic shaping
WS Client
 - Ability to subscribe to TDA streams and record data
Order Creation/Cancellation/Tracking
 - Create orders for TDA API
 - Understand errors
 - Track status of orders, filled, partial, pending, cancelled, etc
Backtracking/Simulations
 - use data from historical database
Front end display
 - nice charts, respond to new data in real time, display metrics
Performance tracking
Portfolio management
TDA account monitor
 - make sure we're not using money we're not supposed to, kill things if we lose too much money
Strategy builder/AI
Historical data/Database
 - Save recorded stream data
 - Get past data from TDA API
 - Replay through data 
